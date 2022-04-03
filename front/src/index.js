import React, { Component } from 'react';
import {
  Platfrom, 
  StyleSheet,
  Text, 
  View
} from 'react-native';
import api from './services/api';
import { postTasks } from './services/TaskService';

export default class App extends Component{
    return (

    );
};

export default function TaskForm({navigation}){
    const [title, setTitle] = useState('');
    const [descricao, setDescricao] = useState('');

    const titleFocus = useRef(null)
    useEffect(() => {
      titleFocus.current.focus()
    }, []);

    const onChangeTitle = (txtTitle) => {
      setTitle(txtTitle)
    };
    
    const onChangeDescricao = (txtDescricao) => {
      setDescricao(txtDescricao)
    };

    const onSave = () => {
      getStorageToken().then(token => {
        postTasks({token, title, descricao}).then(() => {
          setTitle('')
          setDescricao('')
          ToastAndroid.show('Save Task Sucess', ToastAndroid.SHORT)
          navigation.navigate('Task List')
        }).catch(err => console.log('TaskForm postTask err: ', err))
      }).catch(err => console.log('TaskForm postTask err: ', err))
    };

    return(
      <ScrollView>
        <View>
          <View>
            <Text>Add Task</Text>
          </View>
          <View>
            <View>
              <Text>Title</Text>
              <TextInput
                autoCorret={false}
                ref={titleFocus}
                value={title}
                onChangeText={txtTitle => onChangeTitle(txtTitle)}
              />
            </View>
            <View>
              <Text>Title</Text>
              <TextInput
                autoCorret={false}
                numberOfLines={10}
                multiline={true}
                value={description}
                onChangeText={txtDescricao => onChangeDescricao(txtDescricao)}
              />
            </View>
          </View>
          <View>    
            <TouchableOpactity onPress={onSave}>
              <Text>Save</Text>
            </TouchableOpactity>
          </View>
        </View>
      </ScrollView>
    )
};

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});