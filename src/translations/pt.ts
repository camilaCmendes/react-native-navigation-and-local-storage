import { Translations } from "./type";

export const pt: Translations = {
  translation: {
    // screens/groups
    groups_title: "Turmas",
    groups_subtitle: "Jogue com suas turmas",
    groups_emptyListMessage: "Que tal cadastrar a primeira turma?",
    groups_newClassButton: "Criar nova turma",

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

    // storage/group
    storage_appError_groupAlreadyExists:
      "Já existe um grupo cadastrado com esse nome",
  },
};
