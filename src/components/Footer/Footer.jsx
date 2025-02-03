import { MapPin } from "lucide-react";

export default function Footer() {

    return (
      <footer className="flex items-center justify-between p-5 h-[300px] bg-slate-900 text-gray-100 gap-4">
        
        <h1>LOJINHA</h1>
  
        <div className="flex items-center gap-8">
            <p className="text-lg">Inscreva-se na nossa newsletter.</p>
            <form action="" className="flex flex-col gap-2">
                <input type="text" placeholder="Seu nome" className="p-1" />
                <input type="email" placeholder="seu email" className="p-1"/>
                <button type="submit" className="bg-lime-700">Cadastrar</button>
            </form>
        </div>

        <ul>
            <p>Nossas lojas</p>
            <li className="flex text-xs items-center gap-1">
                <MapPin className="w-4" />
                <p>São Paulo, SP</p>
            </li>
            <li className="flex text-xs items-center gap-1">
                <MapPin className="w-4" />
                <p>Rio de Janeiro - RJ</p>
            </li>
        </ul>

       
      </footer>
    )
}