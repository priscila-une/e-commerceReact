import { CircleUserRound, ShoppingCart, Search } from "lucide-react";

export default function Header() {

    return (
      <header className="flex justify-between p-5 bg-slate-900 text-gray-100">
        <h1>LOJINHA</h1>

        <form action="" className="flex items-center gap-1 w-80">
            <input type="text" className="w-full"/>
            <Search />
        </form>

        <div className="flex gap-2">
            <CircleUserRound />
            <ShoppingCart />
        </div>
        
      </header>
    )
}