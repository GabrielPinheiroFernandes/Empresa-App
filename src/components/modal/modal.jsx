import React, { useRef, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Modalize } from "react-native-modalize";
import { styles } from "./modal.style";

function Modal({ show, onClose, children }) {
  const modalizeRef = useRef(null);

  // Abre ou fecha o modal baseado no valor de 'show'
  useEffect(() => {
    if (show) {
      modalizeRef.current?.open(); // Abre o modal
    } else {
      modalizeRef.current?.close(); // Fecha o modal
    }
  }, [show]);

  return (
    <Modalize
      ref={modalizeRef}
      onClosed={onClose}
      modalStyle={styles.modal}
      modalHeight={800} // Ajuste para permitir rolagem se necessário
    >
      {children}
    </Modalize>
  );
}

export default Modal;
