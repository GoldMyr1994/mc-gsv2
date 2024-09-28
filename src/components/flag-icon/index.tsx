import { FlagIconIT } from "./flag-icon-it";

type FlagIconName = "it";

function FlagIcon({ name }: { name: FlagIconName }) {
  switch (name) {
    case "it":
      return <FlagIconIT />;
  }
}

export type { FlagIconName };
export { FlagIcon };
