import { Game } from "../Game/Game";

export function executeCode(code: string, game: Game) {
  // eslint-disable-next-line no-new-func
  const execute = new Function("game", code);
  execute(game);
}
