import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    if (props.value === 1) {
        return (
        <div 
            className="die-face first-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <span className="dot"></span>
        </div>
    )
    }
    
        if (props.value === 2) {
        return (
        <div 
            className="die-face first-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
    )
    }
    
        if (props.value === 3) {
        return (
        <div 
            className="die-face first-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
    )
    }
    
        if (props.value === 4) {
        return (
        <div 
            className="die-face first-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
    )
    }
    
        if (props.value === 5) {
        return (
        <div 
            className="die-face first-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
    )
    }
    
        if (props.value === 6) {
        return (
        <div 
            className="die-face first-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
    )
    }
    
}