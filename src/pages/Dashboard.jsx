import { faBars, faCreditCard, faFileInvoiceDollar, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Header({ balance }) {

  return (
    <View style={styles.header}>
      <TouchableOpacity style={{ marginTop: 15, marginBottom: 30 }}>
        <FontAwesomeIcon color="white" icon={faBars} size={24} />
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Text style={{ fontSize: 24, color: "gray" }}>Saldo total</Text>
        <Text style={{ fontSize: 36, color: "white" }}>R$ {balance}</Text>
      </View>
    </View>
  )
};

function Dashboard({ navigation }) {
  return (
    <View style={{ alignItems: 'center', height: "100%", backgroundColor: 'rgba(0,0,0,0.87)' }}>
      <Header balance={20.57} />
      <View style={styles.container}>
        <View style={styles.containerGrid}>
          <View style={styles.containerRow}>
            <FontAwesomeIcon icon={faFileInvoiceDollar} color="white" size={64} />
            <Text style={{ fontSize: 14, marginTop: 10, color: "white" }}>Pagamentos</Text>
          </View>
          <View style={styles.containerRow}>
            <FontAwesomeIcon icon={faRetweet} color="white" size={64} />
            <Text style={{ fontSize: 14, marginTop: 10, color: "white" }}>Transferências</Text>
          </View>
          <View style={styles.containerRow}>
            <FontAwesomeIcon icon={faCreditCard} color="white" size={64} />
            <Text style={{ fontSize: 14, marginTop: 10, color: "white" }}>Cartões</Text>
          </View>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#17233D',
  },
  headerContainer: {
    alignItems: 'center'
  },
  container: {
    backgroundColor: '#17233D',
    width: '95%',
    borderRadius: 4,
    padding: 20,
    marginTop: 20,
  },
  containerGrid: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  containerRow: {
    textAlign: 'center',
    alignItems: 'center',
    margin: 15,
    elevation: 4,
  }
});

export default Dashboard;