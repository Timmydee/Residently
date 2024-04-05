import axios from 'axios';
import User from '../types/User'; 

// Function to generate random user status
const generateRandomStatus = (): string => {
  const statuses = ['Pending', 'Active'];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const usersWithStatus = response.data.map((user: User) => ({
      ...user,
      status: generateRandomStatus(),
    }));
    return usersWithStatus;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
