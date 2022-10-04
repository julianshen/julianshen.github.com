function addRoute(route:string, options:any, endpoint:any) {
    console.log("  /"+route+":")
	
	Object.keys(endpoint).forEach(m => {
		console.log("    " + m + ":")
		if(options.authRequired) {
			console.log("      security:")
			console.log(`        - userid: []
          token: []`)
		}
		console.log(`      responses:
        '200':
          description: OK`)
	})
}

addRoute(
	'groups.addAll',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.addModerator',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.addOwner',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.addLeader',
	{ authRequired: true },
	{
		post() {},
	},
);

// Archives a private group only if it wasn't
addRoute(
	'groups.archive',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.close',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.counters',
	{ authRequired: true },
	{
		get() {},
	},
);

// Create Private Group
addRoute(
	'groups.create',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.delete',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.files',
	{ authRequired: true },
	{
		get() {
			
		},
	},
);

addRoute(
	'groups.getIntegrations',
	{ authRequired: true },
	{
		get() {},
	},
);

addRoute(
	'groups.history',
	{ authRequired: true },
	{
		get() {},
	},
);

addRoute(
	'groups.info',
	{ authRequired: true },
	{
		get() {},
	},
);

addRoute(
	'groups.invite',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.kick',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.leave',
	{ authRequired: true },
	{
		post() {},
	},
);

// List Private Groups a user has access to
addRoute(
	'groups.list',
	{ authRequired: true },
	{
		get() {},
	},
);

addRoute(
	'groups.listAll',
	{ authRequired: true },
	{
		get() {},
	},
);

addRoute(
	'groups.members',
	{ authRequired: true },
	{
		get() {},
	},
);

addRoute(
	'groups.messages',
	{ authRequired: true },
	{
		get() {},
	},
);
// TODO: CACHE: same as channels.online
addRoute(
	'groups.online',
	{ authRequired: true },
	{
		get() {},
	},
);

addRoute(
	'groups.open',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.removeModerator',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.removeOwner',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.removeLeader',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.rename',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.setCustomFields',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.setDescription',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.setPurpose',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.setReadOnly',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.setTopic',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.setType',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.setAnnouncement',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.unarchive',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.roles',
	{ authRequired: true },
	{
		get() {},
	},
);

addRoute(
	'groups.moderators',
	{ authRequired: true },
	{
		get() {},
	},
);

addRoute(
	'groups.setEncrypted',
	{ authRequired: true },
	{
		post() {},
	},
);

addRoute(
	'groups.convertToTeam',
	{ authRequired: true },
	{
		post() {},
	},
);