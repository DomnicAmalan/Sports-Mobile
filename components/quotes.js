import React, { useEffect, useState } from 'react';
import {Text, Image, View, StyleSheet, Dimensions} from 'react-native';
import Axios  from 'axios'
import { Card } from 'react-native-elements';

const Quotes = () => {
    const [quote, setQuote] = useState({"quote": "I’ve failed over and over again in my life. And that is why I succeed", "author": "- Michael Jordan"})
    
    useEffect(()=> {
        getQuotes() 
    })
    
    const getQuotes = () => {
        Axios.get("https://my-quotes-api.herokuapp.com/api/quotes/random?limit=1&category=sports")
        .then(res => 
        {
            if(res.data){
                console.log(res.data)
                if(res.data[0]["quote"].length < 100){
                    setQuote(res.data[0])
                }
            }
        })
        .catch(() => {()=>console.log("none")})
    }

    return(
        <React.Fragment>
            <View style={styles.quote}>
                <Text style={styles.quoteText}>{quote.quote}</Text>
                <Text style={styles.quoteAuthor}>{"- " + quote.author}</Text>
                <Text style={styles.company}>Powered by Fight Club</Text>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    quote: {
        backgroundColor: "#50AEDE",
        position: "absolute",
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 40,
        borderColor: "#50AEDE",
    },
    quoteText: {
        fontFamily: "rockwell",
        color: "#FCFCFC",
        fontWeight: "bold"
    },
    quoteAuthor: {
        color: "#FCFCFC",
        textAlign: "right",
        fontStyle: "italic",
        fontFamily: "sans-serif"
    },
    company: {
        fontSize: 5,
        textAlign: "right",
        alignSelf: "flex-end",
        position: "absolute",
        top: 165
    }
})

export default Quotes;