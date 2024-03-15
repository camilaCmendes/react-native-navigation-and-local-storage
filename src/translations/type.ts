type TranslationKeys = {
  // screens/groups
  groups_title: string;
  groups_subtitle: string;
  groups_emptyListMessage: string;
  groups_newClassButton: string;
  groups_alertMessage_title: string;
  groups_alertMessage_description: string;

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
  players_alertMessage_addPlayer_title: string;
  players_alertMessage_addPlayer_description: string;
  players_alertMessage_addPlayer_description_error: string;
  players_alertMessage_playersByTeam_title: string;
  players_alertMessage_playersByTeam_description: string;
  players_alertMessage_playerRemove_title: string;
  players_alertMessage_playerRemove_description: string;
  players_alertMessage_groupRemove_title: string;
  players_alertMessage_groupRemove_description: string;
  players_alertMessage_groupRemove_no: string;
  players_alertMessage_groupRemove_yes: string;

  // storage/group
  storage_appError_groupAlreadyExists: string;

  //storage/player
  storage_player_playerAddByGroup_AppError: string;
};

export type Translations = {
  translation: TranslationKeys;
};
