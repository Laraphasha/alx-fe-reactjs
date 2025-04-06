const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center">
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-20 h-20 rounded-full mb-2"
      />
      <h2 className="font-semibold text-lg">{user.login} || {user.name}</h2>
      <p>{user.bio}</p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline mt-1"
      >
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
