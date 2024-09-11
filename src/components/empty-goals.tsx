import logo from '../assets/logo-in-orbit.svg'
import letsStart from '../assets/lets-start-illustrator.svg'
import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

export const EmptyGoals = () => {
  return (
    <div className="h-screen flex justify-center flex-col items-center gap-8">
      <img src={logo} alt="inOrbit" />
      <img src={letsStart} alt="illustrator" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
