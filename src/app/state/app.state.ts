

// Representation of the entire app state

import { DenemeState } from "../pages/login/state/user.reducer";

// Extended by lazy loaded modules
export interface State {
  user: DenemeState; // no main state now
}
