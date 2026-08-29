import { createContext, useContext, useReducer, type Dispatch, type PropsWithChildren } from "react";

// 1) Estado do contexto
// Esse é o estado atual que vai ficar salvo no Context
// Aqui ele tem só uma propriedade: titleColor

type TitleColorState = {
  titleColor: string;
};

// 2) Ação do reducer
// A action é o objeto que você manda com dispatch
// Ela tem: type (qual ação vai acontecer) e payload (o valor novo)

type TitleColorAction = {
  type: "set_title_color";
  payload: string;
};

// 3) Tipo do valor exposto pelo Context
// Aqui o Context vai expor state e dispatch para os componentes consumirem

type TitleColorContextValue = {
  state: TitleColorState;
  dispatch: Dispatch<TitleColorAction>;
};

// 4) Criação do Context
export const TitleColorContext = createContext<TitleColorContextValue | undefined>(undefined);

// 5) Reducer
// O reducer recebe o estado atual e a action
// E retorna o próximo estado
export const titleColorReducer = (
  state: TitleColorState,
  action: TitleColorAction
): TitleColorState => {
  switch (action.type) {
    case "set_title_color":
      // state = estado antigo
      // action.payload = novo valor
      // ...state = copia tudo que já existia
      // titleColor: action.payload = troca só essa propriedade
      return {
        ...state,
        titleColor: action.payload,
      };

    default:
      return state;
  }
};

// 6) Provider
// Aqui o useReducer é inicializado com o valor inicial do estado
export const TitleColorContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(titleColorReducer, {
    titleColor: "purple",
  });

  return (
    <TitleColorContext.Provider value={{ state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};

// 7) Hook para consumir o Context
export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext);

  if (!context) {
    throw new Error("useTitleColorContext must be used inside TitleColorContextProvider");
  }

  return context;
};

// Exemplo de uso:
//
// function App() {
//   return (
//     <TitleColorContextProvider>
//       <MeuComponente />
//     </TitleColorContextProvider>
//   );
// }
//
// function MeuComponente() {
//   const { state, dispatch } = useTitleColorContext();
//
//   return (
//     <>
//       <h1 style={{ color: state.titleColor }}>Título</h1>
//       <button onClick={() => dispatch({ type: "set_title_color", payload: "red" })}>
//         Vermelho
//       </button>
//       <button onClick={() => dispatch({ type: "set_title_color", payload: "blue" })}>
//         Azul
//       </button>
//     </>
//   );
// }
