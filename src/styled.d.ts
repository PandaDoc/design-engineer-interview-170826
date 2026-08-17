import "styled-components";
import type { Theme } from "./theme";

declare module "styled-components" {
  // Makes `${({ theme }) => theme.color.ink}` fully typed everywhere.
  // The "empty" interface is the documented styled-components pattern.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
