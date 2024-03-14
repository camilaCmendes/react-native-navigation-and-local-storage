type TranslationKeys = {
  // screens/groups
  groups_title: string;
  groups_subtitle: string;
  groups_emptyListMessage: string;
  groups_newClassButton: string;

  // screens/newGroup
  newGroup_title: string;
  newGroup_subtitle: string;
  newGroup_inputPlaceholder: string;
  newGroup_buttonLabel: string;
  newGroup_alert_title_newGroup: string;
  newGroup_alert_description_emptyInput: string;
  newGroup_alert_description_errorCreateNewGroup: string;

  // screens/players
  players_subtitle: string;
  players_inputPlaceholder: string;
  players_emptyListMessage: string;
  players_removeTeamButton: string;
  players_teamA: string;
  players_teamB: string;

  // storage/group
  storage_appError_groupAlreadyExists: string;
};

export type Translations = {
  translation: TranslationKeys;
};
