require 'net/http'
require 'json'

require 'jwt'

class PagesController < ActionController::Base


    def manifest
        render file: 'frontend/build/manifest.json'
    end

    def home
        render file: 'frontend/build/index.html'
    end

    def api_profile
        @project_id = Rails.application.config.corbado_project_id
        @user_id = session[:user_id]
        @user_name = session[:user_name]
        @user_email = session[:user_email]

        issuer = "https://#{@project_id}.frontendapi.corbado.io"
        jwks_uri = "https://#{@project_id}.frontendapi.corbado.io/.well-known/jwks"

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
            return render json: { :error => "JWT token is not valid!" }.to_json, status: 400
        end

        # Extract information from the token
        @user_id = decoded_token["sub"]
        @user_name = decoded_token["name"]
        @user_email = decoded_token["email"]

        return render json: { :user_id => @user_id, :user_name => @user_name, :user_email => @user_email }.to_json

        rescue => e
        puts e.message

        return render json: { :error => e.message }.to_json, status: 400
        end
    end
  end