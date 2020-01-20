import React from "react";
import { withStyles } from "@material-ui/styles";

const styles= {
    root: {
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        border: "1px solid black",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "grey",
        width: "100%",
        height: "7rem"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    colorbox: {
        width: "20%",
        height: "25%",
        display: "inline-block",
    },
    clearfix: {
        opacity: "0"
    }
};

function MiniPalette(props) {
    const { classes, paletteName, id, emoji, colors } = props;

    return (
        <div className={classes.root} onClick={props.goToPalette}>
            <div className={classes.colors}>
                {colors.map((col) => (
                    <div className={classes.colorbox} style={{backgroundColor: col.color}}><div className={classes.clearfix}>.</div></div>
                ))}
            </div>
            <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>

        </div>
    );
}

export default withStyles(styles)(MiniPalette);