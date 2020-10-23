const {Router} = require('express');

const {memberController} =require('./controllers')
const {member, auth} =require('./midllewares')

const membersRouter = Router();

membersRouter.post('/', member.checkUserValiditiMiddleware, memberController.createMember);
membersRouter.get('/id/:id', memberController.getMemberInfo);
membersRouter.get('/search', memberController.searchMember);
membersRouter.get('/search/name', memberController.searchMemberName);
membersRouter.delete('/:id', auth.checkAccessTokenMiddleware, memberController.deleteMember);


module.exports = membersRouter;
