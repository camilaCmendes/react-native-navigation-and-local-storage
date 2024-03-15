import { Translations } from "./type";

export const pt: Translations = {
  translation: {
    // screens/groups
    groups_title: "Turmas",
    groups_subtitle: "Jogue com suas turmas",
    groups_emptyListMessage: "Que tal cadastrar a primeira turma?",
    groups_newClassButton: "Criar nova turma",
    groups_alertMessage_title: "Turmas",
    groups_alertMessage_description: "Não foi possível carregar as turmas",

    // screens/newGroup
    newGroup_title: "Nova turma",
    newGroup_subtitle: "Crie a turma para adicionar as pessoas",
    newGroup_inputPlaceholder: "Nome da turma",
    newGroup_buttonLabel: "Criar",
    newGroup_alert_title_newGroup: "Novo Grupo",
    newGroup_alert_description_emptyInput: "Informe o nome da turma",
    newGroup_alert_description_errorCreateNewGroup:
      "Não foi possível criar um novo grupo",

    // screens/players
    players_subtitle: "adicione a galera e separe os times",
    players_inputPlaceholder: "Nome da pessoa",
    players_emptyListMessage: "Não há pessoas nesse time.",
    players_removeTeamButton: "Remover Turma",
    players_teamA: "time a",
    players_teamB: "time b",
    players_alertMessage_addPlayer_title: "Nova pessoa",
    players_alertMessage_addPlayer_description:
      "Informe o nome da pessoa para adicionar.",
    players_alertMessage_addPlayer_description_error:
      "Não foi possível adicionar.",
    players_alertMessage_playersByTeam_title: "Pessoas",
    players_alertMessage_playersByTeam_description:
      "Não foi possível carregar as pessoas do time selecionado",
    players_alertMessage_playerRemove_title: "Remover pessoa",
    players_alertMessage_playerRemove_description:
      "Não foi possível remover essa pessoa.",
    players_alertMessage_groupRemove_title: "Remover",
    players_alertMessage_groupRemove_description: "Deseja remover a turma?",
    players_alertMessage_groupRemove_no: "Não",
    players_alertMessage_groupRemove_yes: "Sim",

    // storage/group
    storage_appError_groupAlreadyExists:
      "Já existe um grupo cadastrado com esse nome",

    //storage/player
    storage_player_playerAddByGroup_AppError:
      "Essa pessoa já está adicionada em um time aqui.",
  },
};
