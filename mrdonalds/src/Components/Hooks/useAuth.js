import { useEffect, useState } from 'react';

export const useAuth = authFirebase => {
	const [auth, setAuth] = useState(null);

	const authen = authFirebase();
	const provider = new authFirebase.GoogleAuthProvider();

	const login = () => authen.signInWithPopup(provider);
	const logOut = () => authen.signOut().catch(err => console.error(err));

	useEffect(() => {
		authen.onAuthStateChanged(user => {
			if (user) {
				setAuth(user);
			} else {
				setAuth(user);
			}
		});
	}, [auth]);

	return { auth, login, logOut };
};
