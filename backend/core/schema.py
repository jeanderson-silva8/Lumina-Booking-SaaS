import graphene
import metrics.schema
import graphql_jwt

class Query(metrics.schema.Query, graphene.ObjectType):
    hello = graphene.String(default_value="Hi! Lumina Analytics GraphQL is running.")

class Mutation(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
