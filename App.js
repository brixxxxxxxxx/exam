import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [currentSection, setCurrentSection] = useState('name');

  const handlePress = () => {
    setCurrentSection(prevSection => {
      switch (prevSection) {
        case 'name':
          return 'education';
        case 'education':
          return 'about';
        case 'about':
          return 'contact';
        case 'contact':
          return 'name';
        default:
          return 'name';
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={handlePress} style={styles.contentContainer}>
          {currentSection === 'name' && (
            <View style = {styles.container}>
              <Image source={require('./assets/pic.jpg')} style = {styles.img}/>
              <Text style = {styles.head}>Brix Marco R. Ang</Text>
              <Text style = {styles.par3}>ᴮᴬᶜᴴᴱᴸᴼᴿ ᴼᶠ ˢᶜᴵᴱᴺᶜᴱ ᴵᴺ ᴵᴺᶠᴼᴿᴹᴬᵀᴵᴼᴺ ᵀᴱᶜᴴᴺᴼᴸᴼᴳʸ</Text>
            </View>
          )}

          {currentSection === 'education' && (
            <View style = {styles.container}>
              <Text style = {styles.head2}>College</Text>
              <Text style = {styles.par}>Global Reciprocal College (2021 - Present){'\n'}Far Eastern University FIT (2016-2017)</Text>
              <Text style = {styles.head3}>Highschool</Text>
              <Text style = {styles.par}>Malabon National High School (2015-2019)</Text>
              <Text style = {styles.head3}>Elementary</Text>
              <Text style = {styles.par}>Amang Rodriguez Elementary School (2009-2015)</Text>
            </View>
          )}

          {currentSection === 'about' && (
            <View style = {styles.container}>
              <Text style = {styles.head2}>About</Text>
              <Text style = {styles.par2}>
                My name is Brix Marco Ang. I’m from Malabon City. I like watching movies and series at least twice a month. I play volleyball on weekends and mobile legends whenever I get time. I am taking Bachelor of Science Information Technology at Global Reciprocal Colleges. I choose this course because i want to challenge myself more. I look forward to having some fun, making friends, and learning key skills in the next few years. You can always count on me for help.
              </Text>
            </View>
          )}

          {currentSection === 'contact' && (
            <View style = {styles.container}>
              <Text style = {styles.head2}>My Project</Text>
              <Image source = {require('./assets/project.png')} style = {styles.img}/>
              <Text style = {styles.head3}>Web-based Online Ordering and Sales Information System of Boxes of Joy </Text>
            </View>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },

  img: {
    height: 250,
    width: 250,
    borderRadius: 200
  },

  head: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },

  head2: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  head3: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30, 
    textAlign: 'center'
  },

  par: {
    fontSize: 13,
    textAlign: 'center',
  },

  par3: {
    fontSize: 20,
    textAlign: 'center',
  },

  par2: {
    fontSize: 15,
    marginTop: 15,
    paddingLeft: 30, 
    paddingRight: 30,
    textAlign: 'center'
  }
  
});

export default App;