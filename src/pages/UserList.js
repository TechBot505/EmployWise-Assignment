import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { UserContext } from '../contexts/UserContext';
import SearchBar from '../components/SearchBar';
import UserCard from '../components/UserCard';
import PaginationControls from '../components/PaginationControls';
import EditUserModal from '../components/EditUserModal';
import 'react-toastify/dist/ReactToastify.css';

const UserList = () => {
  const { users, refreshUserList, updateUserList } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Session expired. Please log in.');
      navigate('/');
      return;
    }
  }, [navigate]);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://reqres.in/api/users?page=${currentPage}`);
        setTotalPages(response.data.total_pages);
        refreshUserList(response.data.data);
      } catch (err) {
        toast.error('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage]);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    setFilteredUsers(
      users.filter(
        (user) =>
          user.first_name.toLowerCase().includes(lowercasedQuery) ||
          user.last_name.toLowerCase().includes(lowercasedQuery)
      )
    );
  }, [searchQuery, users]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      refreshUserList(users.filter((user) => user.id !== id));
      toast.success('User deleted successfully.');
    } catch (err) {
      toast.error('Failed to delete user.');
    }
  };

  const openModal = (user) => {
    setCurrentUser(user);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentUser(null);
    setModalOpen(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${currentUser.id}`, currentUser);
      updateUserList(currentUser);
      toast.success('User updated successfully.');
      closeModal();
    } catch (err) {
      toast.error('Failed to update user.');
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} onEdit={openModal} onDelete={handleDelete} />
            ))}
          </div>
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPrevious={handlePreviousPage}
            onNext={handleNextPage}
          />
        </>
      )}

      {modalOpen && (
        <EditUserModal
          user={currentUser}
          onClose={closeModal}
          onSubmit={handleUpdate}
          setUser={setCurrentUser}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default UserList;
