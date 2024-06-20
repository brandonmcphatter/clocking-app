'use client';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {supabase} from "@/services/supabase";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const session = supabase.auth.getSession();
        setUser(session?.user ?? null);

        const {data: authListener} = supabase.auth.onAuthStateChange(
            (event, session) => {
                setUser(session?.user ?? null);
            }
        );
        return () => {
            authListener.subscription.unsubscribe;
        };
    }, [router, user]);

    return user;
};

export default useAuth;