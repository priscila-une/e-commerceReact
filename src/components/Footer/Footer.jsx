import { MapPin } from "lucide-react";
import Github from '../../assets/github.svg';

export default function Footer() {

    return (
      <footer className="flex items-center justify-around p-5 h-[300px] bg-slate-900 text-gray-100 gap-4">
        
        <div className="flex flex-col gap-4">
            <h1>LOJINHA</h1>
            <p>Este é um projeto de estudo Frontend feito por <a href="https://www.linkedin.com/in/evelin-une/" target="_blank" className="hover:text-violet-700">Evelin Une</a> </p>
            <a href="https://github.com/priscila-une" target="_blank" className="flex border border-gray-800 rounded-lg bg-slate-800 text-slate-100 gap-2 p-2 max-w-fit hover:bg-slate-600">
                <img src={Github} alt="github logo" className="w-5" />
                <p>@priscila-une</p>
            </a>
        </div>

        <ul className="flex flex-col gap-1">
            <p>Nossas lojas</p>
            <li className="flex text-xs items-center gap-1">
                <MapPin className="w-4" />
                <p>São Paulo, SP</p>
            </li>
            <li className="flex text-xs items-center gap-1">
                <MapPin className="w-4" />
                <p>Rio de Janeiro - RJ</p>
            </li>
            <li className="flex text-xs items-center gap-1">
                <MapPin className="w-4" />
                <p>Minas Gerais - MG</p>
            </li>
        </ul>
      </footer>
    )
}