import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";
import NavigationMenuOptions from "../Navigation/NavigationMenu.options";

type Profile = {
  name: string;
  country: string;
  currentlocation: string;
  birthCountry: string;
  birthCity: string;
  bio: string;
  hobbies: string[];
  email: string;
  social: {
    github: string;
  };
};

function About() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const aboutMeRoute = NavigationMenuOptions.aboutme.route;

    fetch(`${API_BASE_URL}${aboutMeRoute}`)
      .then((res) => res.json())
      .then(setProfile);
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div style={{ paddingTop: "2rem" }}>
      <h1>{profile.name}</h1>
      <p>
        <strong>Bio:</strong> {profile.bio}
      </p>
      <p>
        <strong>Current Location:</strong> {profile.currentlocation},{" "}
        {profile.country}
      </p>
      <p>
        <strong>Birthplace:</strong> {profile.birthCity}, {profile.birthCountry}
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
      <p>
        <strong>GitHub:</strong>{" "}
        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {profile.social.github}
        </a>
      </p>
      <p>
        <strong>Hobbies:</strong> {profile.hobbies.join(", ")}
      </p>
    </div>
  );
}

export default About;
