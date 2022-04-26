export type PokemonDetails = {
  id: number;
  weight: number;
  height: number;
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  };
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
  types: Array<{
    type: {
      name: string;
    };
  }>;
  moves: Array<{
    move: {
      name: string;
      url: string
    };
    version_group_details: Array<{
      level_learned_at: number,
      move_learn_method: {
        name: string
      }
    }>
  }>;
};
