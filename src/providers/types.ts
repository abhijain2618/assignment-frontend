export interface Flight {
  flight_number: number; //flight_number
  launch_date: string; // launch_date_utc
  location: string; //
  mission: string;
  orbit: string;
  launch_success: boolean; // launch_success
  launch_site_name: string; // launch_site.site_name
  rocket_name: string; // rocket.rocket_name
  upcoming_status: boolean;
}
