// app/week-9/page.js
"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn(); // opens GitHub OAuth popup
    } catch (err) {
      console.error(err);
      alert("Sign-in failed. Please try again.");
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (err) {
      console.error(err);
      alert("Sign-out failed. Please try again.");
    }
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Week 9 — Login</h1>

      {!user ? (
        <div className="space-y-3">
          <p className="text-gray-700">
            Sign in with GitHub to access your shopping list.
          </p>
          <button
            onClick={handleLogin}
            className="rounded bg-black text-white px-4 py-2 hover:opacity-90"
          >
            Sign in with GitHub
          </button>
        </div>
      ) : (
        <div className="space-y-4 rounded border p-4">
          <p>
            Welcome,{" "}
            <span className="font-semibold">{user.displayName ?? "User"}</span>{" "}
            ({user.email})
          </p>

          <div className="flex gap-3">
            <Link
              href="/week-9/shopping-list"
              className="rounded bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700"
            >
              Go to Shopping List
            </Link>

            <button
              onClick={handleLogout}
              className="rounded border px-4 py-2 hover:bg-gray-100"
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
