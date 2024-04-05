import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import User from '../types/User'; // Adjust the path as needed
import { fetchUsers } from '../api/userApi';

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
        <Text>{item.status}</Text>
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
        <Text style={styles.TextH1}>User</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextH1: {
    fontSize: 32,
    fontFamily: 'Satoshi-Bold',
    color: '#322B8C'
  },
  userContainer: {
    marginTop: 80,
  },
  userList: {
    backgroundColor: '#EFF2F7',
    marginTop: 20,
    borderRadius: 16,
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F9FAFC',
    width: '100%',
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInitials: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  userId: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 12,
    color: '#08080C',
    fontFamily: 'Satoshi-Medium',
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 11,
    fontFamily: 'Satoshi-Regular',
    color: '#6E717C',
  },
  status: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 17,
    borderColor: '#FFF',
    borderWidth: 1,
  },
  initialsText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default UserListScreen;
