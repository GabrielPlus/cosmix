import { useEffect, useState } from 'react';
import React from 'react';

import * as SecureStore from 'expo-secure-store';
import { Redirect } from 'expo-router';

export default function Index() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync('accessToken');
      setLoggedInUser(!!token);
      setLoading(false);
    };

    checkToken();
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <Redirect href={!loggedInUser ? "/(tabs)" : "/(tabs)/index"} />
      )}
    </>
  );
}
