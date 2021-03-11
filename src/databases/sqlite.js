import * as SQLite from 'expo-sqlite';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';




const db = SQLite.openDatabase('db.testDb') // returns Database object

class Teste extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
    // Check if the items table exists if not create it
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, count INT)'
      )
    })
    this.fetchData() // ignore it for now
  }
  render() {
    return (
        <View style={{width:'100%', flex:1, alignItems:'center', marginTop:30}}>
        <Text>Add Random Name with Counts</Text>
        <TouchableOpacity onPress={this.newItem} style={{width:'50%', backgroundColor:'green', alignItems:'center'}}>
          <Text style={{color:"#fff"}}>Add New Item</Text>
        </TouchableOpacity>

        <ScrollView style={{backgroundColor:"blue", width:'90%'}}>
        {
            this.state.data && this.state.data.map(data =>
            (
                <View key={data.id} style={{borderBottomColor:"#fff",borderBottomWidth:2}} >
                <Text >{data.text} - {data.count}</Text>
                <TouchableOpacity onPress={() => this.increment(data.id)}>
                    <Text style={{color:"green"}}> + </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.delete(data.id)}>
                    <Text style={{color:"red"}}> DEL </Text>
                </TouchableOpacity>
                </View>
            )
        )}
        </ScrollView>
      </View >
    )
  }

// Styles are removed purpose-fully 

fetchData = () => {
  db.transaction(tx => {
    // enviando 4 argumentos em executeSql
    tx.executeSql('SELECT * FROM items', null, // passando consulta sql e parâmetros: null
    // retorno de chamada de sucesso que envia duas coisas objeto de transação e objeto ResultSet
      (txObj, { rows: { _array } }) => this.setState({ data: _array }),
      // callback de falha que envia duas coisas Objeto de transação e Erro
      (txObj, error) => console.log('Error ', error)
      ) // end executeSQL
  }); // end transaction
};

newItem = (cols,valor) => {
  db.transaction(tx => {
    tx.executeSql(`INSERT INTO items (${cols}) values (?, ?)`, [valor],
      (txObj, resultSet) => this.setState({ data: this.state.data.concat(
          { id: resultSet.insertId, text: 'gibberish', count: 0 }) }),
      (txObj, error) => console.log('Error', error))
  })
}

increment = (id) => {
  db.transaction(tx => {
    tx.executeSql('UPDATE items SET count = count + 1 WHERE id = ?', [id],
      (txObj, resultSet) => {
        if (resultSet.rowsAffected > 0) {
          let newList = this.state.data.map(data => {
            if (data.id === id)
              return { ...data, count: data.count + 1 }
            else
              return data
          })
          this.setState({ data: newList })
        }
      })
  })
}

delete = (id) => {
  db.transaction(tx => {
    tx.executeSql('DELETE FROM items WHERE id = ? ', [id],
      (txObj, resultSet) => {
        if (resultSet.rowsAffected > 0) {
          let newList = this.state.data.filter(data => {
            if (data.id === id)
              return false
            else
              return true
          })
          this.setState({ data: newList })
        }
      })
  })
}

}
export default Teste;
// Styles are removed purpose-fully 

