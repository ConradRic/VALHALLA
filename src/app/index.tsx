import { Link, router } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export default function LoginScreen() {
    function handleLogin() {
        router.replace("/home/page");
    }

    return(
        <View style={styles.container}>
            

            <Image
                source={require("@/assets/images/RESTAURANTE.LOGO.PNG.png")}
                style={{ 
                    width: 450, 
                    height: 450,
                    alignSelf: 'center',
                    marginVertical: 20
                }} 
            />

            <View> 
                <Text style={styles.textdetails}>E-mail</Text>
                <TextInput 
                    placeholder="Seu email" 
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View>
                <Text style={styles.textdetails}>Senha</Text>
                <TextInput 
                    placeholder="Sua senha" 
                    style={styles.input}
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity onPress={handleLogin} style={styles.btn}>
                <Text style={{color: '#fff'}}>Entrar</Text>
            </TouchableOpacity>
                
            <Link href={"/cadastrar/page"} style={[styles.textdetails, {marginTop: 20}]}>
                Crie uma Conta
            </Link>
        </View>
    )
}