import { name, version } from 'src/../package.json';

export class AppSettings {
  public static APP_NAME = name;
  public static APP_VERSION = version;
  public static API_ENDPOINT = "http://localhost:8080/api/ecosys";
}
