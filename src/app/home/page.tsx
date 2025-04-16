import { Image, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { styles } from "./style"
import { Link } from 'expo-router'

export default function Index() {
    const MENU = [
        {
            id: 1,
            name: "MijolnirBanqueteDigno",
            description: "Sete coxas de carneiro, Queijo e Mel",
            price: 70.90,
            image: require("@/assets/images/coxasCarneiro.jpg")
        },

        {

            id: 2,
            name: "FomeOdinson",
            description: "Costelas ao molho Odin",
            price: 80.90,
            image: require("@/assets/images/FomeOdinson.jpg")

        },


        {

            id: 3,
            name: "HaindallStrongBurguer",
            description: "O hamburguer digno de Asgard",
            price: 90.90,
            image: require("@/assets/images/HaindallStrongBurguer.jpg")

        },

    ]


    return (

        <ScrollView style={styles.menuList}>



            <View style={styles.header}>
            <Image style={styles.headerImage} source={require("@/assets/images/barViking.jpg")} />
            </View>
            <Text style={styles.restaurantName}>VALHALLA</Text>
            <Text style={styles.subtitle}>"Sua fome de guerreiro, merece uma refeição ao estilo viking"</Text>

            <View>

                <View style={styles.tabs}>
                    {["Combos", "Lanches", "Bebidas", "Sobremesas"].map((tab) => (
                        <TouchableOpacity>
                            <Text style={styles.tabText} >{tab}</Text>
                        </TouchableOpacity>
                    ))}
                </View>


                {
                    MENU.map((item) => (
                            <Link href={"/produto/1"} asChild>
                        <TouchableOpacity style={styles.menuItem}>
                            <View style={styles.menuContent}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text>{item.description}</Text>
                                <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
                            </View>
                            <Image source={item.image}  style={styles.itemImage} />

                        </TouchableOpacity>
                    </Link>
                    ))
                }



            </View>





        </ScrollView>



    )
}

