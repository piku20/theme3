import {
    Button,
    StyleSheet,
    Text,
    View,
} from "react-native";
import {
    DarkTheme,
    themes,
} from "../../themes/theme";
import React, {
    useEffect,
    useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../services/store";
import { ThemeState } from "../services/modules/theme/themeTypes";
import { switchMode } from "../services/modules/theme/themeActions";

const ToggleTheme = ({}) => {
    
    const theme:ThemeState = useSelector((state:RootState)=>state.theme);

    const dispatch = useDispatch();

    const [mode, setMode] = useState<string>(theme.mode);

    const handleThemeChange = () => {
        dispatch(switchMode(theme.mode === "light" ? "dark" : "light"));
    };

    useEffect(()=>{
        setMode(theme.mode);
    },[theme]);

    const capitalizeFirstLetter = (str:any) => {
        let firstLetter = str.charAt(0);
        let result:string = firstLetter.toUpperCase() + str.slice(1);
        return result;
    };
    
    return(
        <View style={[
            styles.container,
            //mode=='light'? styles.light : styles.dark,
            styles[`${theme.mode}`],
        ]}>
            <Text
                style={[
                    styles.text,
                    //mode=="light"?styles.textLight:styles.textDark,
                    //styles[`text${capitalizeFirstLetter(theme.mode)}`],
                    {
                        //color: themes.light.textColor,
                        color: themes[`${theme.mode}`]["textColor"]
                    }
                ]}
            >We are on {capitalizeFirstLetter(theme.mode)} mode!</Text>
            <Button
                title={`Switch to ${theme.mode==="light"?"Dark":"Light"} mode`}
                onPress={handleThemeChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        marginBottom:20,
    },
    textLight:{
        color: 'black',
    },
    textDark:{
        color:'white',
    },
    light:{
        backgroundColor:'white',
    },
    dark:{
        backgroundColor:"black",
    },    
});

export default ToggleTheme;