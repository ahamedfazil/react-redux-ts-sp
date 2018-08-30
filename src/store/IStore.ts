import { IUserState } from '../models/IUserState';
import { IAppState } from '../models/IAppState';

export default interface IStore {
    app: IAppState;
    user: IUserState;
}
