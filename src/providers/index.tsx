/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, ComponentType } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store";
import ThemeProvider from "./ThemeProvider";
import ApolloProvider from "./ApolloProvider";

// Define a type for the props of the accumulated component
type AccumulatedComponentProps = { children: ReactNode };

// Define a more specific type for provider components
type ProviderComponentType<P = any> = ComponentType<P>;

// Define a type for the components with props
type ComponentWithProps<P = any> = [ProviderComponentType<P>, P?];

// Define the type for the buildProvidersTree function
const buildProvidersTree = (
  componentsWithProps: ComponentWithProps[]
): ComponentType<AccumulatedComponentProps> => {
  const initialComponent: ComponentType<AccumulatedComponentProps> = ({
    children,
  }) => <>{children}</>;

  return componentsWithProps.reduce(
    (AccumulatedComponents, [Provider, props = {}]) => {
      const ProviderComponent: ComponentType<AccumulatedComponentProps> = ({
        children,
      }) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
      ProviderComponent.displayName = "ProvidersTree";
      return ProviderComponent;
    },
    initialComponent
  );
};

const ProvidersTree = buildProvidersTree([
  [ThemeProvider],
  [ApolloProvider],
  [
    ReduxProvider,
    {
      store,
    },
  ],
]);

export default ProvidersTree;
