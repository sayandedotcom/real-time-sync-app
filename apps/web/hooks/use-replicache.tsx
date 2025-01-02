// import { nanoid } from "nanoid";
// import * as React from "react";
// import { create } from "zustand";
// import { immer } from "zustand/middleware/immer";

// import { Replicache } from "@repo/models";

// import { api } from "~/lib/api";

// import { env } from "~/env";
// import { useUser } from "~/hook/user-user";

// type State = {
//   // M is a type for all mutators in the app (client and server)
//   rep: Replicache | null;
// };

// type Actions = {
//   setRep: (rep: Replicache) => void;
// };

// const useReplicacheStore = create<State & Actions>()(
//   immer((set) => ({
//     rep: null,
//     setRep: (rep) => set({ rep }),
//   }))
// );

// export const useReplicache = () => {
//   return { rep: useReplicacheStore((state) => state.rep) };
// };

// export const useLoadReplicache = () => {
//   const { data } = useUser();
//   const user = data?.user;
//   const { rep, setRep } = useReplicacheStore((state) => state);

//   React.useEffect(() => {
//     if (!user?.id) return;
//     const iid = nanoid();

//     const r = new Replicache({
//       name: user.id,
//       licenseKey: env.NEXT_PUBLIC_REPLICACHE_LICENSE_KEY,
//     });

//     setRep(r);

//     return () => {
//       void r.close();
//     };
//   }, [setRep, user?.id]);
// };
