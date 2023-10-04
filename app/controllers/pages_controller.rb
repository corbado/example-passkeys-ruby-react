require 'net/http'
require 'json'

require 'jwt'

class PagesController < ActionController::Base

    def logo192
        @project_id = Rails.application.credentials.corbado_project_id
        render file: 'frontend/build/logo192.png'
    end

    def manifest
        @project_id = Rails.application.credentials.corbado_project_id
        render file: 'frontend/build/manifest.json'
    end

    def test
        @project_id = Rails.application.credentials.corbado_project_id
        render file: 'frontend/build/index.html'
    end


    def login
        @project_id = Rails.application.credentials.corbado_project_id
        render 'pages/login'
        end

    def profile
        @project_id = Rails.application.credentials.corbado_project_id
        @user_id = session[:user_id]
        @user_name = session[:user_name]
        @user_email = session[:user_email]

        
        project_id = Rails.application.credentials.corbado_project_id

        issuer = "https://#{project_id}.frontendapi.corbado.io"
        jwks_uri = "https://#{project_id}.frontendapi.corbado.io/.well-known/jwks"

        begin
        # Fetch JSON from the jwks_uri
        uri = URI(jwks_uri)
        response = Net::HTTP.get(uri)
        json = JSON.parse(response)
        
        # Get the public key
        publicKey = JSON.parse(json["keys"].first.to_json)

        # Verify the JWT token
        verifier = JWT::Verify.new({},
            iss: issuer,
            verify_iat: true,
            algorithms: ["RS256"],
            jwks: publicKey
        )

        cboShortSession = cookies[:cbo_short_session]
        decoded_token = JWT.decode(cboShortSession, nil, false, verifier: verifier).first

        # Check if the token is valid
        unless decoded_token
            @error_message = "JWT token is not valid!"
            return render 'error'
        end

        # Extract information from the token
        @project_id = project_id
        @user_id = decoded_token["sub"]
        @user_name = decoded_token["name"]
        @user_email = decoded_token["email"]

        return render 'pages/profile'

        rescue => e
        puts e.message
        redirect_to '/login'
        end
    end
  end