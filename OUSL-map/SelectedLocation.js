import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function SelectedLocation({ selectedMarker, closeModal }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.whiteRectangle}>
        {/* Section 1: Selected Location */}
        <View style={styles.section}>
          <Text style={styles.selectedLocationText}>Selected Location</Text>
          <Icon name="chevron-thin-down" size={25} color="#333" onPress={closeModal}/>
        </View>

        {/* Section 2: Image, Title, and Topic */}
        <View style={styles.section}>
          <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('./assets/libraryimg2.jpg')}
                style={styles.roundImage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>{selectedMarker}</Text>
              <Text style={styles.topicText}>ABS12SF54</Text>
            </View>
          </View>
        </View>

        {/* Section 3: Description */}
        <View style={styles.section}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>Description</Text>
            <Text style={styles.smallDescriptionText}>
              A library is a collection of pre-written and reusable code, functions, classes, or modules that provide specific functionality or features.
            </Text>
          </View>
        </View>

        {/* Section 4: Three Images Horizontally */}
        <View style={styles.section}>
          <View style={styles.imageRow}>
            <Image
              source={require('./assets/libraryimg3.jpeg')}
              style={styles.smallImage}
            />
            <Image
              source={require('./assets/libraryimg4.jpg')}
              style={styles.smallImage}
            />
            <Image
              source={require('./assets/libraryimg5.jpg')}
              style={styles.smallImage}
            />
          </View>
        </View>

{/* Section 5: Button Section */}
<View style={styles.section}>
  <View style={styles.buttonContainer}>
    <Text style={styles.buttonText}>Direction for the Location</Text>
  </View>
</View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteRectangle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 15,
    paddingTop: 15,
  },
  selectedLocationText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 15,
    flexDirection: 'row',
    marginRight: 15,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 15,
  },
  imageContainer: {
    marginRight: 15,
  },
  roundImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  topicText: {
    color: 'gray',
    fontSize: 14,
    marginTop: 5,
  },
  descriptionContainer: {
    marginLeft: 15,
    alignItems: 'flex-start',
    flex: 1,
  },
  descriptionText: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  smallDescriptionText: {
    color: 'black',
    fontSize: 14,
    marginTop: 5,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the images horizontally
    marginTop: 15,
  },
  smallImage: {
    width: 90,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
    marginHorizontal: 5, // Add horizontal margin between images
  },

  buttonContainer: {
    alignItems: 'center',
  //  marginTop: 20,
  marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
