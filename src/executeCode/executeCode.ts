import { Game } from "../Game/Game";

export function executeCode(code: string, game: Game) {
  const execute = new Function("game", code);
  execute(game);
}
