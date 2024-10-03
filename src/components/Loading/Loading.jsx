import { ActivityIndicator, Image, Text, View } from "react-native";
import { styles } from "./Loading.style";
import { color } from "../../constants/theme";
import icons from "../../constants/icons";

function Loading() {
    return  <>
                {/* Indicador de carregamento */}
                <ActivityIndicator size="large" color={color.accent} style={{...styles.spinner,backgroundColor:color.background}} />
                <View style={styles.container}>
                    {/* Componente de Imagem */}        
                    <Image
                        style={styles.image}
                        source={icons.hourglass}
                    />
                    {/* Texto de carregamento */}
                    <Text style={styles.loadingText}>Carregando...</Text>
                </View>
            </>
    
}

export default Loading;
