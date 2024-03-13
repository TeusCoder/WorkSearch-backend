import { Usuario } from "../business/usuario";

export interface UsuarioService{
    criar(usuario : Usuario) : Usuario;
    //editar(//id: string) : Usuario | undefined ;
    //excluir(//id: string) : Usuario | undefined ; 
}
