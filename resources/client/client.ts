import { ESXClient } from "fivem-esx-js/client/esx_client";
import './cl_main';
import './cl_twitter';
import './cl_contacts';
import './cl_sellout';
import './cl_bank';

export let ESX: ESXClient = null;

setTick(() => {
  while (ESX === null) {
    emit("esx:getSharedObject", (obj: ESXClient) => (ESX = obj));
  }
});