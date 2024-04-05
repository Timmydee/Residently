import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  

  