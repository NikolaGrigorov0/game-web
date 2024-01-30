"use client"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  
    <h1 className="text-6xl">Game Web</h1>
    <button className="bg-gray-500" onClick={() => console.log("clicked")}>button</button>
    </main>
  );
}
