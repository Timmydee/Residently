import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import User from '../../types/User'; // Adjust the path as needed
import { fetchUsers } from '../../api/userApi';
import { styles } from './UserListStyle';

const UserListScreen: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const usersData = await fetchUsers();
          setUsers(usersData);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Function to get initials from name
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map((part) => part.charAt(0).toUpperCase())
      .join('');
  };

  const renderItem = ({ item }: { item: User }) => (
    <View style={[styles.userItem]}>
      <View style={styles.userDetails}>
        <View style={[styles.userInitials, { backgroundColor: '#FFFFFF' }]}>
          <Text style={styles.initialsText}>{getInitials(item.name)}</Text>
        </View>
        <View style={styles.userId}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userEmail}>{item.email}</Text>
        </View>
      </View>
      <View style={[styles.status, { backgroundColor: item.status === 'Active' ? '#E1EAD6' : 'transparent' }]}>
        <Text style={styles.statusText}>{item.status}</Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="#FF8600" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Text style={styles.TextH1}>Users</Text>
        <View style={styles.userList}>
          <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default UserListScreen;
